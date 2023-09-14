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
const data_source_1 = __importDefault(require("../../data-source"));
const task_entity_1 = require("../../entities/task.entity");
const appErrors_1 = require("../../errors/appErrors");
const deleteTaskService = ({ taskId, userId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRepository = data_source_1.default.getRepository(task_entity_1.Task);
    const task = yield taskRepository.findOne({
        where: { id: taskId, user: { id: userId } },
    });
    if (!task) {
        throw new appErrors_1.AppError(404, "A informação que você está tentando excluir não existe ou você não tem permissão para executar essa operação.");
    }
    yield taskRepository.remove(task);
    return { message: "Recurso deletado com sucesso." };
});
exports.default = deleteTaskService;
