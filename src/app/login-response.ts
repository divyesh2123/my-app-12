export interface LoginResponse {

    id: string
  title: string
  firstName: string
  lastName: string
  email: string
  role: string
  created: string
  isVerified: boolean
  jwtToken: string

}

export interface LoginRequest
{

    email: string
    password: string
}

export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  isToc:boolean;
  email:string;
} 
 