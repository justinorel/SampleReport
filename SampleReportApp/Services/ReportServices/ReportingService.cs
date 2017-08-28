using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Telerik.Reporting;
using ReportManager.Models;
using ReportManager.Reports;

namespace SampleReportApp.Services.ReportServices
{
    public class ReportingService
    {
        public static InstanceReportSource GetPeakUsage()
        {
            //Query Database
            ProcessedPeaksList searchResults = new ProcessedPeaksList();
            PeakUsageReport peakUsageReport = new PeakUsageReport();
            peakUsageReport.DataSource = searchResults.processedPeaks;

            InstanceReportSource IRS = new InstanceReportSource();
            IRS.ReportDocument = peakUsageReport;

            return IRS;
        }
    }
}