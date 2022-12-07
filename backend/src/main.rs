mod mongo;
use mongo::{DB, User};

use actix_web::{get,post, App, HttpServer,web, Responder};
use actix_cors::Cors;


#[post("/api/data")]
async fn data(db: web::Data<DB>, form: web::Json<User>) -> impl Responder {
    println!("{:?}", form);
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
    // add cors
    


    HttpServer::new(move ||{
    let cors = Cors::default()
    .allow_any_origin()
    .allow_any_method()
    .allow_any_header()
    .supports_credentials();
        App::new()
        .wrap(cors)
        .app_data(web::Data::new(db.clone()))
        .service(data)
    })
    .bind(("127.0.0.1", 8000))?
    .run()
    .await
}
