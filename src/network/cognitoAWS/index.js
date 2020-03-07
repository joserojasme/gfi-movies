import { Auth } from 'aws-amplify'

let dataResult = {code:null,data:null}

export const errorNotAuthorizedException = 'NotAuthorizedException'
export const notAuthorizedException = 'Usuario o contraseña incorrectos'

export const errorUserNotFoundException = 'UserNotFoundException'
export const userNotFoundException = 'El usuario no existe'

export const SUCCESS = 'Success'
export const ERROR_GENERAL = 'Ocurrio un error intentando realizar el proceso'

export async function signIn(data, setIsLoading) {
  setIsLoading(true)
  try {
    const result = await Auth.signIn(data.username, data.password)
    dataResult = {
      code: result.challengeName,
      data: result
    }
  } catch (err) {
    dataResult = { code:err.code, data:err }
  }
  setIsLoading(false)
  return dataResult
}

export async function signOut() {
  await Auth.signOut({ global: true })
}
