namespace API.Models
{
    public class User
    {
        public string? first_name { get; set; }
        public string? second_name { get; set; }
        public string? first_surname { get; set; }
        public string? second_surname { get; set; }
        public int phone_number { get; set; }
        public string? email { get; set; }
        public int id { get; set; }
        public Role role { get; set; }


    }
}
//(Nombre completo, teléfono, correo y si es estudiante en caso de
//serlo solicitara la información de la Universidad donde estudia y su carnet que se utilizara
//para almacenar millas en su programa de lealtad).