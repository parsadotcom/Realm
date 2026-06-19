import helmet from "helmet";
import express from "express";
import cors from "cors";

export async function configBaseMiddlewares(app) {
  app.use(helmet());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors({
    origin: ["https://localhost:8585", "http://localhost:8585", "https://localhost:5173", "http://localhost:5173", "https://localhost:3000", "http://localhost:3000"],
    credentials: true,
  }));
}
