export interface Aposta{
    idAposta: number,
    idCliente:number,
    dataCompra:Date,
    valor: number,
    pago: boolean,
    idJogo: number
}