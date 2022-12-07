
use mongodb::{options::ClientOptions,Client};
use actix_web::{web};
use serde::{Deserialize, Serialize};
pub use mongodb::bson::{doc,Bson};
use dotenv::dotenv;
use std::env;

#[derive(Clone)]
pub struct DB{
    pub client: Client,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct User{
    pub first_name: String,
    pub middle_name: Option<String>,
    pub email: String,
    pub school: String,
    pub country: String,
    pub committee: String,
    pub position: String,
    pub phone: i32,
}


impl DB{
    pub async fn new() -> Self{
        dotenv().ok();
        // let uri = env::var("MONGO_URI").expect("MONGO_URI must be set");
        let client_options = ClientOptions::parse(&uri).await.expect("Failed to parse client options");
        let client = Client::with_options(client_options).expect("Failed to initialize client");
        Self{
            client
        }
    }
    pub async fn insert_delegates (&self, form: web::Json<User>) -> mongodb::error::Result<()>{
        let db = self.client.database("MUN-DELEGATES");
        let coll = db.collection("delegates");
        coll.insert_one(form.into_inner(), None).await?;
        Ok(())
    }
}

