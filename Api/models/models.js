const dataBase = require("mysql2");

const schema = {
  1: `CREATE TABLE Cadastro(
		id SERIAL,
		Anuncio TEXT NOT NULL,
		Cliente TEXT NOT NULL,
		Inicio DATE NOT NULL,
		TERMINO DATE NOT NULL,
		Investimento TEXT NOT NULL,
		deletado BOOL DEFAULT FALSE
);`,
};

const drop = async (tableName) => {
  if (tableName) {
    await dataBase.query(`DROP TABLE ${tableName}`);
    console.log("Tabela dropada!");
  }
};

const up = async (number = null) => {
  if (!number) {
    for (const value in schema) {
      await dataBase.query({ text: schema[value] });
    }
  } else {
    await dataBase.query({ text: schema[number] });
  }
  console.log("Migração rodada!");
};

//up();
