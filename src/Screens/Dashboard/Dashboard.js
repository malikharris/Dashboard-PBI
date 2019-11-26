import React, {useState} from 'react';
import Report from 'powerbi-report-component';
import Logo from '../../components/Logo';

const Dashboard =()=>{
	const models = window["powerbi"].models;
	const accessToken= "H4sIAAAAAAAEAB2Wx6rFjLWD3-WfOuDeAhm49-1eZ-69d4f77veQuUCLDy2h__5jpe8wp8U___4nRlAsu_yB3NaF7o9St2RobWoNkkDtucMJDbUfLSu5Tz0gvNquHB5H2THdMh9CqjzjWcD1Et4a7TC3tLFwt2B7GI8g9I2CkpqUA5mLGDvpVRlg6g4MUrh9c3bOcoT1TxYaT7EMhYTTsSm-xTS4kmav_Xmj1zWODnpttb7hcf9uSg9dUT-m4cHMn1Hd9C7MRA5LoBNIIgYc1IJNgS96zJRO9pnjKhU4B6eUO52jXTm5Fn5Fvvn40GPJVnUGQNZwFTec4QVzpXxpCqu9iF9CVGLGVwDj5wmZ1WU48HNGBbVDfkpGx0bYj_HzYXL9hjR5-ApXjGYFTPpGWZv0O0ayg3ftbafDy3d6YlLGKkYlWGbWlv6Kx8uFjB1KU63YRbmTkVJK2DuS2koM4v0tdMXiLe0oUDMBLcKgShAaVOw-E6_XRPoqxxuN4wASEkit2e-VMWOlmXkfDzHDChkZMCgmqtKBuQ1gBAkH4qamlwzw-bA9qB-6FdT6nQPLHgqrRutmwFCYNC2KJAVqRYT7ISqv-1feTYoTwoGlwWmAUiR_YkZFuz7L5iYNYYxkQezleXv-TTFYyZivnwt1Z3tJL0V6ysw5vZvDNYr9O9pQf_XUw3Fb8IPlyOzLfaYaUIBT-5XOB1izYU68k01p_CG-adW9hz1ydnRXLxeO5-SxBCfIhB8rvafBzZ8tVNUcq4FPE2Y_ue2Bh-_A0MLvv9zEYRvsvb7VwuQWi7bZKxV370ON2aH97B4zrTcTGHh687GtsgrzgQoyvXQ1N72CWOQC2PtY9GUOMcGyUeJRO5MkhPOsFsvD7x4A2Y6vg7utwDD49H0EwrY5J5wQuj9ystQG5Fd5AqqLjWmom00_CRUYYmXaDa-ECxC3FxDGpTAPQDtCyFB4WHTAtV_w-EiCR_PlNBSX6Qzz8hGjBI7TfNA3iXLpHNpr97ubueGmsZzQ3iMn9ePGxEzwu1KcAH68zI1NDV9XxzWplAgX32zi9Mdc1B3lAhpvEt7PUfgeTjy2_rCSjMWP5j6jSOqLT2qRMmLndyPZRNy1Xkgs187zEm6RNOg2GVWOjktRJ_6d4CZLfJfZA2OZ3ndBE0uXE2sQu7A9t75IW2a8cY-i5I94u1ifu0nnxWOnwqZVitsldkSehhBoCDY0A22e6UfVWmFcZWLl8s0PYvuEzTcdVMEaVAoxtefRJHWDkljF1j_jGBumNT7OmkBvieNZP_GwKsP7z0Tvt4i4ULp0-E4cen1jtZtffMtwRbuuEBPtX8Sxl-0ganJeFrH_XZ-_EpGLLg4CVs7AVlaRHdlu4fGGDDD-2kKqfP9u--gWF1vwLB4SDh8tyZcIFuk2PruroWHHfoalEHUPqXEIsTH2cbbzzsmicwxmU9b6GASGa373IwQL6YikMX31MXJjOme0WfOVV3RhBXGtIFR7q1kGop1DAWVo7m9qLuBGsxTEv63cyuYyIl4Qh89LMAhmVrILK_2PqOflmix2IWUTCAU2twN2Lk2RKGhu617a47yrlM7o3qmuQOOuBHV_CmWlgnlFq2ll7A7ZtyKdQI-ItlkqmYpVPuSMAKbe4cBKHVsZ6VJ8ckFwYfKI3jZT1UfrgikBEJaVYEAsqADneLqUlQCYpHj2C9TJcvMutaDUcVIdwmL1spXWmZhedoYkHvqYUNcNn_nAGyfsZK6Blgjd-ChRtIwB712tQ11crqA7JRFIAJGvNYxPGEEurhAby8i_RrOe8qi55FPBILMECV1_-pqf6dj1LyUq56e_4CXswAs5FhNb7wXBQd-fUGW0DcJk3VVCNOI3CeRkx1I5El8Qxoe5foONOc1Dm4x4i9vE_tVvpBIwNv-sIp6letdQhhUFdjhAAAx5llfdsrpi_Kuup8aWqC4D2yTONOxa-ynie9-ov_6XQoDvGS-_ef2GdtAy-1LCsUoJcxDwqq93mR80Zj6RA2c0TyxRQHMqvr5xX0Z-qztQS9zPlHWLxRwaDpHOW6DT_jKK3Z5OllOgj0n71aLrkCC_-KMipabElUx3EfDzfg4V3euOTwmL9ifyhVs_GLKgbG2TTzcRUwKR9vFeOqHdNTJgG8GQvNVPFHJEE5yNv0pRAHcBE7cR9Njez3Y_UkDr1Ss_vnuLB4P-9TcJKhYnyWT2uWW7AqBhScAyiuB9jKFeyv_zz7_-4bZ3OWatfP-mx4i6F_XGJ7CDefbX2YjIhLKdz_tbJXG4YoJSrL9KB-0PUjr9xNmwF0Dfsx1CRWNv1DhN_tmg2Lp2ilJav-gDHFoIVw8GCOByDji8OhcbN9R2Le2DobE_vUEIaId1twvSzGv21RyXKINjCrava8OV69nYvHSFVWKtbz1CkMcFekJhzzk1SaAPQbtqXyAqpDyCFaxfjikeo8-QMragnRmcVwIlfaJPYuKlmPg9cDXteChkvmmzJnJI86im-VgzezspzV-i0cL0a6CYcQevBjLnY6hpojy6GUAZo6Y2BRkXRCioPsFhxoU4VJIlU_cxPuQzqKtwVd5KtZJlU_yr1dLI3e-8__M_zO_SlJsS_FHe5B2JEToV8Qol11ii5XfdmP-p3Lae0uPcyj-ZNgBBHbTh8ujbPCbolIxARRpoPpmJ-vtbVIBcmd422c25WS1HQJurA9Ms-d3NWg7ktqQODGeaKyTdPT-pbaROVEqPm5suY71I6gG7kuqQjHlt8lT6hgrNx770PH5BFHg_B-yhyJUzE8vR1_N-k1W_ddYbEEkyB3o6FzpBT0PqF1fewSI2dR8G58t5Hh3Le9I-Kp9xs1JfTdS_Il7Esne0D1QHGJKBgoxZf_8oiGb6NZtB9dedT9xx_02rRxQLdx8n0GaW5unXyX-tDuB-CGsZzGdfJPq5n9oFCFeFd2c0V0W-mW-tbUoWhz9qj4nj2cw4S4r8es3br4KzFnNy4R_hUN1o_2H-v_8HE_OwWG4LAAA="
	const [embedConfig, setEmbedConfig] = useState({
    type: 'report',
    accessToken: accessToken,
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d',
    id: 'f6bfd646-b718-44dc-a378-b73e6b528204',
});

	return(
		<div>
			<div style={{height: "100vh", margin: 50}}>
			<div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between", height:"50px"}}>
				<Logo/>
				<a href="#" style={{padding: 10}}>Log Out</a>
			</div>
				<Report
				style={{height: "100vh"}}
				embedType="report"
				embedId={embedConfig.id}
				embedUrl={embedConfig.embedUrl}
				accessToken={embedConfig.accessToken}
				permissions="All"
				onEmbedded={()=>{console.log('Embedded')}}
				tokenType={"Embed"}
				/>
			</div>
		</div>
	)
}

export default Dashboard;
