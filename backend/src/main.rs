mod mongo;
use mongo::{DB, User};

use actix_web::{get, App, HttpServer,web, Responder, client::Client};


#[get("/api/data")]
async fn data(db: web::Data<DB>, form: web::Json<User>) -> impl Responder {
   let mut client = Client::default();
   let kh_verify = form.payment.token.clone();
    let res = client.post("https://khalti.com/api/v2/payment/verify/")
    .header ("Authorization ", "Key test secret key") // test secret key
    .send_payload(form)
    .await
    .map_err(|e| e.to_string())?
    and_then(|res| res.json::<User>().map_err(|e| e.to_string()));
    println!("Response: {:?}", res);

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
