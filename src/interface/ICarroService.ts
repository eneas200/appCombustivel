import { Observable } from 'rxjs';
import { Carro } from 'src/models/Carro';

export interface ICarroService {
    cadastrar(carro: Carro): Observable<Carro>;
    remove(carro_id: number) : void;
    editar(carro: Carro): Observable<Carro>;
    buscar(carro_id: number) : Observable<Carro>;
    listar(): Observable<Carro[]>;
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number): number;
}
