DROP TABLE IF EXISTS dbo.Product;
CREATE TABLE dbo.Product
(
	productId bigint IDENTITY(1,1),
	productName varchar (1000),
	productOrg varchar (1000),
	productPrice bigint NOT NULL,
	productDate date
)

select * from dbo.Product

insert into dbo.Product values ('PS1', 'Sony', 199, '1994-12-03')
insert into dbo.Product values ('PS2', 'Sony', 299, '2000-03-04')
insert into dbo.Product values ('PS3', 'Sony', 399, '2006-11-11')