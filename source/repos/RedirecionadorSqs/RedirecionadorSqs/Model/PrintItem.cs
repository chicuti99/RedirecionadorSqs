using System;

public class PrintItem
{
    private const String PRINT_TYPE_ORDER = "order";    // print obj with bill and orders
    private const String PRINT_TYPE_INDIVIDUAL_BILL = "individual_bill"; // print obj with order_baskets
    private const String PRINT_TYPE_TABLE_SESSION = "table_session"; // print obj with bills
    private const String PRINT_TYPE_ORDERS_REPORT = "orders-report";

    public int id { get; set; }
    public String print_status { get; set; }
    public int printer_id { get; set; }
    public DateTime printed_at { get; set; }
    public String print_type { get; set; }
    public DateTime filter_start_date { get; set; }
    public DateTime filter_end_date { get; set; }
    public string table_type { get; set; }
    public bool is_delivery { get; set; }
    public string restaurant_name { get; set; }
    public string order_type { get; set; }
    public string input_waiter { get; set; }
    public string input_client { get; set; }
    public string with_withdrawal { get; set; }
    public PrintObject print_object { get; set; }



}