using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Brand1
{
    public int BrandId { get; set; }

    public string BrandName { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
