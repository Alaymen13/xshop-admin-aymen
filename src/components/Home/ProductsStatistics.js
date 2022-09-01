import React from "react";

const ProductsStatistics = () => {
  return (
		<div className="col-xl-6 col-lg-12">
			<div className="card mb-4 shadow-sm">
				<article className="card-body">
					<h5 className="card-title">
						Products statistics
					</h5>
					<iframe
						style={{
							background: "#FFFFFF",
							border: "none",
							borderRadius: "2px",
							boxShadow:
								"0 2px 10px 0 rgba(70, 76, 79, .2);",
							width: "100%",
							height: "350px",
						}}
						src="https://charts.mongodb.com/charts-e-commerce-vmzzn/embed/charts?id=630e082f-4f5f-4078-8761-bf96d137667c&maxDataAge=3600&theme=light&autoRefresh=true"
					></iframe>
				</article>
			</div>
		</div>
  );
};

export default ProductsStatistics;
{/* <iframe
	style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
	width="640"
	height="480"
	src="https://charts.mongodb.com/charts-e-commerce-vmzzn/embed/charts?id=630e03a6-4c39-43a1-8018-d54b79c015d3&maxDataAge=3600&theme=light&autoRefresh=true"
></iframe>; */}
{/* <iframe
	style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
	width="640"
	height="480"
	src="https://charts.mongodb.com/charts-e-commerce-vmzzn/embed/charts?id=630e082f-4f5f-4078-8761-bf96d137667c&maxDataAge=3600&theme=light&autoRefresh=true"
></iframe>; */}