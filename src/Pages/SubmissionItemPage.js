import React from 'react';
import {Link} from 'react-router-dom';
import {Spacer} from '../Elements/Common';
import Brands from '../Components/Brands';
import {BackToOverviewButton} from '../Elements/Submit';
import {NewsItemPanel} from '../Elements/NewsPanel'
import Breadcrum from '../Components/Breadcrum'
import {connect} from 'react-redux'
import {NewsView} from '../Elements/Submission'

function SubmissionItemPage({submission_id, submissions}) {
  let data
  let pathArr1, pathArr2, pathArr3, pathArr4 = []
  let fileName1, fileName2, fileName3, fileName4
  if (submissions && submissions.length > 0) {
    data = submissions.filter(item=>item.id===submission_id)[0]
  }
	const capitalize = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    let text
    if (data) {
        text = capitalize(data.car_vin_number)
        if (data.file1) {
            pathArr1 = data.file1.split("/")
            fileName1 = pathArr1[pathArr1.length-1]
            console.log(pathArr1, fileName1)
        }
        if (data.file2) {
            pathArr2 = data.file2.split("/")
            fileName2 = pathArr2[pathArr2.length-1]
        }
        if (data.file3) {
            pathArr3 = data.file3.split("/")
            fileName3 = pathArr3[pathArr3.length-1]
        }
        if (data.file4) {
            pathArr4 = data.file4.split("/")
            fileName4 = pathArr4[pathArr4.length-1]
        }
    }
return (
    <NewsItemPanel>
        <Breadcrum
                items={[
                  { url: "/submission", text: "Submissions" },
                  { url: `/submission/${submission_id}`, text: text },
                ]}
        />
        <Spacer />
        <NewsView>
        {
          data && (
            <div>
            <p><strong>Car VIN No: </strong>{data.car_vin_number}</p>
            <p><strong>Brand: </strong>{data.car_brand}</p>
            <p><strong>Build: </strong>{data.car_model}</p>
            <p><strong>Model: </strong>{data.car_build}</p>
            <p><strong>Engine Type: </strong>{data.engine_type}</p>
            <p><strong>Engine Power: </strong>{data.engine_power}</p>
            <p><strong>Year: </strong>{data.year}</p>
            <p><strong>Tuning Level: </strong>{data.tuning_level}</p>
            <p><strong>Reading Method: </strong>{data.reading_method}</p>
            <p><strong>ECU Type: </strong>{data.ecu_type}</p>
            <p><strong>Car Plate No: </strong>{data.car_plate_num}</p>
            <h3>The following files is uploaded</h3>
            {
              !data.file1 && !data.file2 && !data.file3 && !data.file4 && (<p>No files</p>)

            }
            <a href={data.file1} target="_blank" download={fileName1}>{fileName1}</a>
            <a href={data.file2} target="_blank" download={fileName2}>{fileName2}</a>
            <a href={data.file3} target="_blank" download={fileName3}>{fileName3}</a>
            <a href={data.file4} target="_blank" download={fileName4}>{fileName4}</a>
            </div>
            )
        }
            
        </NewsView>
        <Link to="/submission"><BackToOverviewButton value="BACK TO OVERVIEW" readOnly="true" /></Link>
        <Spacer />
        <Brands />
    </NewsItemPanel>
)
}
const mapStateToProps = (state, ownProps) => ({
  submission_id: ownProps.match.params.submission_id,
  submissions: state.blogs.submissions
})

export default connect(mapStateToProps, null)(SubmissionItemPage)

