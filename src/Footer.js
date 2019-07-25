import React, { Component } from 'react';
import moment from 'moment';

class Footer extends Component {
	render() {
		return (
			<footer className="footer bg-teal-700 text-white m-0">
				<div className="content-has-text-centered">
					<p className="m-2">
						<strong>Rep Tracker</strong> built by{' '}
						<a href="https://www.bokasolutions.com" className='inline-block sm:inline has-hover border-b-4 border-teal-500' target="_blank" rel="noopener noreferrer">
							Wayne Boka, Web Developer
						</a>
						.
					</p>
					<p className="m-2">
						The source code is licensed{' '}
						<a href="http://opensource.org/licenses/mit-license.php" className='has-hover border-b-4 border-teal-500' target="_blank" rel="noopener noreferrer">
							MIT
						</a>{' '}
						and can by found on{' '}
						<a href="https://www.github.com/wboka/rep-tracker" className='has-hover border-b-4 border-teal-500' target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						.
					</p>
					<p className="m-2">&copy; {moment().format('YYYY')} Wayne Boka, All Rights Reserved</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
