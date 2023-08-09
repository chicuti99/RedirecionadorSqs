using System;

public class Printer
{
    public int id { get; set; }
    public int width { get; set; }
    public String name { get; set; }
    public String host { get; set; }
    public String port { get; set; }
    public String driver { get; set; }
    public bool print_bills_allowed { get; set; }
    public bool print_reports_allowed { get; set; }
    public bool print_orders_allowed { get; set; }
    public bool is_category_limited { get; set; }
    public int restaurant_id { get; set; }

    public Impressora ToImpressora()
    {
        var impressora = new Impressora();
        impressora.id = id;
        impressora.nome = name;
        impressora.host = host;
        impressora.width = width;
        impressora.driver = driver;
        impressora.port = port;
        impressora.printBillsAllowed = print_bills_allowed;
        impressora.printReportsAllowed = print_reports_allowed;
        impressora.printOrdersAllowed = print_orders_allowed;
        impressora.isCategoryLimited = is_category_limited;
        return impressora;
    }
}
