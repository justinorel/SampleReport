using SampleReportApp.Services.ReportServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Telerik.Reporting.Services.WebApi;

namespace SampleReportApp.Controllers
{
    public class ReportsController : BaseAPIController
    {
        static Telerik.Reporting.Services.ReportServiceConfiguration configurationInstance =
        new Telerik.Reporting.Services.ReportServiceConfiguration
        {
            HostAppId = "CONNECTLicenseReporting",
            ReportResolver = new ReportFileResolver(HttpContext.Current.Server.MapPath("~/Reports"))
                .AddFallbackResolver(new ReportTypeResolver()),
            Storage = new Telerik.Reporting.Cache.File.FileStorage(),
        };

        public ReportsController()
        {
            this.ReportServiceConfiguration = configurationInstance;
        }

        [HttpGet]
        [Route("api/reports", Order = 0)]
        public HttpResponseMessage Get(string startDate, string endDate, string UltimateId)
        {
            DateTime start = Convert.ToDateTime(startDate);
            DateTime end = Convert.ToDateTime(endDate);

            var result = ReportingService.GetPeakUsage();

            return ToJson(result);
        }

    }
}
