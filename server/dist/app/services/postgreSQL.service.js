"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const pg_1 = require("pg");
let PostgreSQLService = class PostgreSQLService {
    constructor() {
        this.client = new pg_1.Client({
            host: 'localhost',
            user: 'postgres',
            port: 5432,
            password: 'postgres',
            database: 'Chess',
        });
    }
    async query(userQuery) {
        await this.client.connect();
        const data = (await this.client.query(userQuery)).rows;
        await this.client.end();
        return data;
    }
};
PostgreSQLService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], PostgreSQLService);
exports.default = PostgreSQLService;
/*
Exemple of how multiple services can use a Service()

import PgService from './services/postgres.service';
import { Container, Service } from 'typedi';

@Service()
class ExempleService {
  constructor(public injectedService: PgService) {}
}

const service = Container.get(ExempleService);
service.injectedService.fetchUsers();

@Service()
class AnotherService {
  constructor(public injectedService: PgService) {}
}

const anotherService = Container.get(ExempleService);
anotherService.injectedService.fetchUsers();
*/
