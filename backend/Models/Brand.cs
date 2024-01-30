using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models
{

    public class Brand
    {
        /*id is a special property that indicates that
            id is to be the primary key in the generated
        table

        */
        public int Id { get; set; }
        public string? Name { get; set; } 

    }
}