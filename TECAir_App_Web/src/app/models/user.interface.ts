export interface UserI {
    id: number,
    email: string,
    first_name: string,
    second_name: string | null,
    first_surname: string,
    second_surname: string | null,
    phone: number,
    university: string | null,
    student_id: number | null,
    role_name: string,
    password: string,
    fullName: string

}