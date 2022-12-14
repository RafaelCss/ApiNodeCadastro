import { TipoProduto } from "../interface";
import { mensagem } from ".";

interface IVerificaCampos {
  email?: string
  senha?: string
  numero?: number
  tipo?: TipoProduto
}
class VerificarCampos {

  verificarEmail(email: string) {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && email.length > 0) {
      return email
    }
    return this.erros('email')
  }

  verificarString(nome: string, campo?: string) {
    if (nome.length > 0) {
      return nome
    }
    return this.erros(nome)
  }

  validarNumber(numero: number) {
    if (numero > 0 || numero < 5) return false
    return numero
  }

  validarTipo(tipo: TipoProduto) {
    if (tipo === TipoProduto.higiene
      || tipo === TipoProduto.limpeza
      || tipo === TipoProduto.perecivel) {
      return tipo
    }
    return this.erros('tipo')
  }

  verificarSenha(senha: string) {
    if (senha && senha.length > 0) {
      return senha
    }
    return this.erros('senha')
  }

  private erros(campo: string, msg?: string) {
    return mensagem(campo, msg)
  }

}



export default VerificarCampos;