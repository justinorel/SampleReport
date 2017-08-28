using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReportManager.Models
{
    [Serializable]
    public partial class ProcessedPeak
    {
        public String UltimateId { get; set; }
        public String OrgName { get; set; }
        public String CountryISO { get; set; }
        public Int32? ProductId { get; set; }
        public String ProductName { get; set; }
        public String FeatureString { get; set; }
        public DateTime? UsageDate { get; set; }
        public Int32? YearMonth { get; set; }
        public Int32? YearQuarter { get; set; }
        public Int32? YearWeek { get; set; }
        public Int32? Year { get; set; }
        public Int32? PeakUsages { get; set; }
        public Int32? Peak10min { get; set; }
        public Int32? PeakHour { get; set; }
        public Int32? PeakDay { get; set; }
        public Int32? PeakDeployed { get; set; }
        public Int32? TotalHours { get; set; }
        public Int32? TotalMinutes { get; set; }
        public Int32? Checkouts { get; set; }
        public Int32? Overage { get; set; }
        public Int32? LicenseQty { get; set; }
        public String LicenseType { get; set; }
        //public DateTime? LastUpdatedOn { get; set; }
        public String UsageType { get; set; }
    }
}
