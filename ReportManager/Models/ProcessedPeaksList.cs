using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReportManager.Models
{
    [Serializable]
    public partial class ProcessedPeaksList
    {
        public IEnumerable<ProcessedPeak> processedPeaks { get; set; }
    }
}
