import { Observable } from 'rxjs';
import { ICarroService } from 'src/interface/ICarroService';
import { Carro } from 'src/models/Carro';

export class CarroService implements ICarroService {
    cadastrar(carro: Carro): Observable<Carro> {
        throw new Error('Method not implemented.');
    }
    remove(carro_id: number): void {
        throw new Error('Method not implemented.');
    }
    editar(carro: Carro): Observable<Carro> {
        throw new Error('Method not implemented.');
    }
    listar(): Observable<Carro[]> {
        throw new Error('Method not implemented.');
    }
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number): number {
        throw new Error('Method not implemented.');
    }
    
}