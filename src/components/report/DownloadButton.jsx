import "../../styles/report.css";

function DownloadButton({

  onDownload,

  onShare,

}) {

  return (

    <div className="report-buttons">

      <button
        className="download-btn"
        onClick={onDownload}
      >

        📥 Download PDF

      </button>

      <button
        className="reanalyze-btn"
        onClick={onShare}
      >

        📤 Share Report

      </button>

    </div>

  );

}

export default DownloadButton;