import { Request, Response } from "express";

const { query } = require("express");

import pool from "../database";

class PacientesController {
  public async list(req: Request, res: Response): Promise<any> {
    const pacientes = await pool.promise().query("SELECT * FROM paciente");
    res.json(pacientes);
  }
  public async ver(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const pacientes = await pool
      .promise()
      .query("SELECT * FROM paciente WHERE id = ?", [id]);
    if (pacientes.length > 0)
         res.json( pacientes[0]);   
    console.log(pacientes)
  } 

  public async add(req: Request, res: Response): Promise<void> {
    await pool.promise().query("INSERT INTO paciente set ?", [req.body]);
    console.log(req.body);
    res.json({ message: "Paciente guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    await pool.promise().query("DELETE FROM paciente WHERE id = ?", [id]);
    res.json({message: "El paciente fue eliminado"});
  }

  public async update(req: Request, res: Response): Promise<void>{
    const {id} = req.params;
    await pool.promise().query("UPDATE paciente set ? WHERE id = ?", [req.body, id])
    res.json({message: "Paciente actualizado"});
  }
}

export const pacientesController = new PacientesController();
export default pacientesController;
