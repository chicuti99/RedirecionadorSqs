using System;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;

public class Utils
{
	public static T DeserializeJson<T>(string json)
	{
		var settings = new JsonSerializerSettings
		{
			NullValueHandling = NullValueHandling.Ignore,
			MissingMemberHandling = MissingMemberHandling.Ignore,
			DateTimeZoneHandling = DateTimeZoneHandling.RoundtripKind
		};
		return JsonConvert.DeserializeObject<T>(json, settings);
	}	

	public static string SerializeJson<T>(T data) 
	{
		return JsonConvert.SerializeObject(data,Newtonsoft.Json.Formatting.None,new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
	}


	public  static T ParseHttpContent<T>(HttpContent content)
	{
		string data = (System.Text.Encoding.UTF8.GetString(content.ReadAsByteArrayAsync().Result));
		return DeserializeJson<T>(data);
	}

	public static StringContent GetStringContent<T>(T data) 
	{
		string json = SerializeJson<T>(data);
		var teste = new StringContent(json, Encoding.UTF8,"application/json");
		return new StringContent(json,Encoding.UTF8,"application/json");
	}

    public static String CodePhoneDigits(String phone)
    {
        try
        {
            if (phone == null)
                return null;
            String[] phoneParts = phone.Split('-');

            phoneParts[0] = Regex.Replace(phoneParts[0], "[0-9]", "x");

            return String.Join("-", phoneParts);
        }
        catch
        {
            return phone;
        }
    }

    public static DateTime GetBrasiliaTimezoneDateTime(DateTime date)
    {
        // problematic block
        /*date = TimeZoneInfo.ConvertTimeFromUtc(date, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
        return date;*/
        if (date == DateTime.MinValue)
            date = DateTime.UtcNow;

        return date.AddHours(-3);
    }

    
}
