/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private dbInstance: SQLiteObject;
  readonly db_name: string = 'project.db';
  readonly db_table: string = 'usuarios';
  readonly db_table2: string = 'asignaturas';
  readonly db_table3: string = 'asistencia';
  readonly db_table4: string = 'calificaciones';
  readonly db_table5: string = 'tareas';
  USERS: Array <any> ;

  constructor(private platform: Platform, private sqlite: SQLite) { this.databaseConn();}

   // Create SQLite database
   databaseConn() {
    this.platform.ready().then(() => {
      this.sqlite.create({
          name: this.db_name,
          location: 'default'
        }).then((sqLite: SQLiteObject) => {
          this.dbInstance = sqLite;
          sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_table} (
                nombre       STRING (20),
                apellido     STRING (20),
                correoE      STRING (20),
                nInstitucion STRING (20),
                password     STRING (20) 
              )`, [])
            .then((res) => {
              // alert(JSON.stringify(res));
            })
            .catch((error) => alert(JSON.stringify(error)));
        })
        .catch((error) => alert(JSON.stringify(error)));
    })
    this.dbInstance.executeSql(`
   CREATE TABLE IF NOT EXISTS ${this.db_table2}  (     
    asignatura STRING (20),
    horario    DATETIME (20))
    `, [])
    .then(() => {
      alert('Table Created!');
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });

    this.dbInstance.executeSql(`
   CREATE TABLE IF NOT EXISTS ${this.db_table3}  (     
    numeroA STRING (20),
    faltas  STRING (20) 
    `, [])
    .then(() => {
      alert('Table Created!');
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
    this.dbInstance.executeSql(`
    CREATE TABLE IF NOT EXISTS ${this.db_table4}  (     
      numeroA    STRING (20),
      asignatura STRING (20),
      calif      STRING (20)  
     `, [])
     .then(() => {
       alert('Table Created!');
     })
     .catch(e => {
       alert("error " + JSON.stringify(e))
     });
    this.dbInstance.executeSql(`
    CREATE TABLE IF NOT EXISTS ${this.db_table5}  (     
      numeroA     STRING (20),
      numeroT     STRING (20),
      califTareas STRING (20)   
     `, [])
     .then(() => {
       alert('Table Created!');
     })
     .catch(e => {
       alert("error " + JSON.stringify(e))
     });

    }
    /**
     Insertar usuario
     */
    public addItem(a,b,c,d,e) {
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (nombre, apellido,correoE,nInstitucion,password ) VALUES ('${a}', '${b}', '${c}', '${d}', '${e}')`, []) 
    }
  }