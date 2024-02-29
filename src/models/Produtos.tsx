import Categoria from './Categoria';
import Funcionario from './Funcionario'

export default interface Postagem {
  id: number;
  nome: string;
  data: string;
  tema: Categoria | null;
  usuario: Funcionario | null;
}