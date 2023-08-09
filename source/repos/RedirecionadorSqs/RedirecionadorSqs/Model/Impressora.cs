using System;
using OrderSheet.Model;

public class Impressora
{
	

    public int id { get; set; }
    public String nome { get; set; }
    public String host { get; set; }
    public int width { get; set; }
    public String port { get; set; }
    public String driver { get; set; }
    public bool printBillsAllowed { get; set; }
    public bool printReportsAllowed { get; set; }
    public bool printOrdersAllowed { get; set; }
    public bool isCategoryLimited { get; set; }

    public Printer ToGarcomDigitalPrinter()
        {
            var printer = new Printer();
            printer.id = id;
            printer.name = nome;
            printer.host = host;
            printer.driver = driver;
            printer.port = port;
            printer.width = width;
            printer.print_bills_allowed = printBillsAllowed;
            printer.print_reports_allowed = printReportsAllowed;
            printer.print_orders_allowed = printOrdersAllowed;
            return printer;
        }
    }

