import { Auth0Client } from '@auth0/auth0-spa-js'
import { navigate } from 'gatsby'

interface AuthResult {
  expiresIn: number
  accessToken: string
  idToken: string
  idTokenPayload: unknown
}

type User = unknown

const isBrowser = typeof window !== 'undefined'
let auth0: Auth0Client
let user: User

export const getClient = (): Auth0Client => {
  if (!isBrowser) {
    return auth0
  }

  if (!auth0) {
    auth0 = new Auth0Client({
      domain: process.env.AUTH0_DOMAIN as string,
      client_id: process.env.AUTH0_CLIENTID as string,
      redirect_uri: process.env.AUTH0_CALLBACK,
    })
    return auth0
  }

  return auth0
}

type Tokens = {
  accessToken: string
  idToken: string
  expiresAt: number | null
}

const tokens: Tokens = {
  accessToken: '',
  idToken: '',
  expiresAt: null,
}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem('isLoggedIn') === 'true'
}

type AuthorizeOptions = {
  hasError?: boolean
  signUp?: boolean
}

export const authorize = ({ hasError = false, signUp = false }: AuthorizeOptions): void => {
  if (!isBrowser) {
    return
  }
  const client = getClient()

  client.loginWithRedirect({
    redirect_uri: process.env.AUTH0_CALLBACK, // TODO: change 'service' to 'common' after debugging
    hasError,
    signUp,
  })
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const setSession = (cb = () => {}) => (err: unknown, authResult: AuthResult) => {
  if (err) {
    navigate('/')
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    // user = authResult.idTokenPayload
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/account')
    cb()
  }
}

export const getProfile = (): User => {
  return user
}
