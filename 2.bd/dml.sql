--! inserir
insert into tb_pet (nm_apelido)
values ("Josias");


--visualizar
select * from tb_pet;

--visualizar todos
select 
id_pet			id,
nm_apelido		nome
from tb_pet;

--deletar
delete from tb_pet
where id_pet =1;