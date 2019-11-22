provider "google" {
    credentials = file(var.credentials_file)

    project = var.project
    region  = var.region
    zone    = var.zone
}

resource "google_compute_network" "plant-journal-vpc_network" {
      name = "plant-journal-network"
}

resource "google_storage_bucket" "plant-journal-frontend" {
    name     = "plant-journal-frontend"
    location = "europe-west1"
}

resource "google_storage_bucket" "plant-journal-image-store" {
    name     = "plant-journal-image-store"
    location = "europe-west1"
}

resource "google_app_engine_application" "plant-journal-backend" {
    location_id = "europe-west"
}
