using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Telerik.Reporting.Services.WebApi;

namespace SampleReportApp.Services.ReportServices
{
    public class ReportsHost : ReportsControllerBase
    {

        static Telerik.Reporting.Services.ReportServiceConfiguration configurationInstance =
        new Telerik.Reporting.Services.ReportServiceConfiguration
        {
            HostAppId = "CONNECTLicenseReporting",
            ReportResolver = new ReportFileResolver(HttpContext.Current.Server.MapPath("~/Reports"))
                .AddFallbackResolver(new ReportTypeResolver()),
            Storage = new Telerik.Reporting.Cache.File.FileStorage(),
        };

        public ReportsHost()
        {
            this.ReportServiceConfiguration = configurationInstance;

        }
    }
}