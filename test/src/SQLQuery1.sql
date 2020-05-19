DROP TABLE IF EXISTS dbo.Product;
CREATE TABLE dbo.Product
(
	productId bigint IDENTITY(1,1) NOT NULL,
	productName varchar (1000),
	productOrg varchar (1000),
	productPrice bigint NOT NULL,
	productDate date
)

select * from dbo.Product

insert into dbo.Product values ('Super mario Bros', 'Nintendo', 39, '5-12-1989')
insert into dbo.Product values ('Donkey Kong', 'Nintendo', 29, '5-10-1981')
insert into dbo.Product values ('League of legends', 'Riot', 0, '15-06-2020')
insert into dbo.Product values ('Call of duty', 'Activision', 49, '21-11-2019')
insert into dbo.Product values ('FIFA 2020', 'EA', 49, '5-12-2020')

DROP TABLE IF EXISTS dbo.Command;
CREATE TABLE dbo.Command
(
	commandId bigint IDENTITY(1,1) NOT NULL,
	productName varchar (1000),
	commandDate date,
	commandDescription bigint NOT NULL
)

select * from dbo.Command