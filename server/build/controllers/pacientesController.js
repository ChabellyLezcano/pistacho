"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacientesController = void 0;
const { query } = require("express");
const database_1 = __importDefault(require("../database"));
class PacientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacientes = yield database_1.default.promise().query("SELECT * FROM paciente");
            res.json(pacientes);
        });
    }
    ver(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pacientes = yield database_1.default
                .promise()
                .query("SELECT * FROM paciente WHERE id = ?", [id]);
            if (pacientes.length > 0)
                res.json(pacientes[0]);
            console.log(pacientes);
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query("INSERT INTO paciente set ?", [req.body]);
            console.log(req.body);
            res.json({ message: "Paciente guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query("DELETE FROM paciente WHERE id = ?", [id]);
            res.json({ message: "El paciente fue eliminado" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query("UPDATE paciente set ? WHERE id = ?", [req.body, id]);
            res.json({ message: "Paciente actualizado" });
        });
    }
}
exports.pacientesController = new PacientesController();
exports.default = exports.pacientesController;
