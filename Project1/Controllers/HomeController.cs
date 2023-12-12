using Microsoft.AspNetCore.Mvc;
using Project1.Models;

namespace Project1.Controllers
{
	public class HomeController : Controller
	{
		public List<Expense> Index()
		{
			List<Expense> expenses = new List<Expense>
			{
				new Expense
				{
					Id = "e1",
					Title = "Toilet Paper",
					Amount = 94.12,
					Date = new DateTime(2020, 7, 14),
				},
				new Expense
				{
					Id = "e2",
					Title = "New TV",
					Amount = 799.49,
					Date = new DateTime(2021, 2, 12),
				},
				new Expense
				{
					Id = "e3",
					Title = "Car Insurance",
					Amount = 294.67,
					Date = new DateTime(2021, 2, 28),
				},
				new Expense
				{
					Id = "e4",
					Title = "New Desk (Wooden)",
					Amount = 450,
					Date = new DateTime(2021, 5, 12),
				},
			};

			return expenses;
		}
	}
}
