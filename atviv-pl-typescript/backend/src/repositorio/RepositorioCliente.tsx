import { JpaRepository } from 'spring-data-jpa';
import { Cliente } from '../modelo/Cliente';

export interface RepositorioCliente extends JpaRepository<Cliente, number> {
}