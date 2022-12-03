mod mongo;
use mongo::{DB, User};

use actix_web::{get, App, HttpServer,web, Responder};


#[get("/api/data")]
async fn data(db: web::Data<DB>, form: web::Form<User>) -> impl Responder {
    match db.insert_delegates(form).await {
        Ok(_) => "Success",
        Err(_) => "Failed",
    }
}

#[get("/")]
async fn index() -> impl Responder {
    "Goto /api/data to insert data"
}

#[actix_web::main]
async fn main() -> std::io::Result<()>{
    let db = DB::new().await;
    HttpServer::new(move ||{
        App::new()
        .app_data(web::Data::new(db.clone()))
        .service(data)
    })
    .bind(("127.0.0.1", 8000))?
    .run()
    .await
}
