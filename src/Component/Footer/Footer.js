import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__inner'>
					<div className='footer__infulence'>
						<h4 className='footer__infulencetitle'>
							<span className='footer__infulencespan'>W</span>e influence 20
							million users and is the number one business and technology news
							network on the planet
						</h4>
					</div>
					<div className='footer__quick'>
						<h4 className='footer__title'>Quick Link</h4>
						<ul className='footer__quicklist'>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									MY BOOKMARK
								</a>
							</li>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									INTERESTS
								</a>
							</li>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									CONTACT US
								</a>
							</li>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									BLOG INDEX
								</a>
							</li>
						</ul>
					</div>
					<div className='footer__categories'>
						<h4 className='footer__title'>Top Categories</h4>
						<ul className='footer__quicklist'>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									BUSINESS
								</a>
							</li>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									POLITICS
								</a>
							</li>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									TEACH
								</a>
							</li>
							<li className='footer__quickitem'>
								<a href='' className='footer__quicklink'>
									HEALTH
								</a>
							</li>
						</ul>
					</div>
					<div className='footer__form'>
						<h4 className='footer__title'>Sign Up for Our Newsletter</h4>
						<p className='footer__text'>
							Subscribe to our newsletter to get our newest articles instantly!
						</p>
						<form action='' className='footer-form'>
							<input
								type='text'
								className='footer__input'
								placeholder='Your email address'
							/>
							<button className='footer-form__submit' type='submit'>
								Sign Up Now
							</button>
							<br />
						</form>
						<input type='checkbox' />
						<span className='checkbox__span'>
							I have read and agree to the terms & conditions
						</span>
					</div>
				</div>
				<div className='footer__bottom'>
					<a href='./'>
						<img
							src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/footer-s-logo.png'
							alt='image'
							className='footer__bottomlogo'
						/>
					</a>
					<div className='footer__bottominner'>
						<span className='footer__bottominnerspan'>Follow Us</span>
						<a href='https://facebook.com' target='_blank'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3128/3128208.png'
								alt='facebook icon'
								className='footer__linkicon'
							/>
						</a>
						<a href='https://twitter.com' target='_blank'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3128/3128212.png'
								alt='twitter icon'
								className='footer__linkicon'
							/>
						</a>
						<a href='https://youtube.com' target='_blank'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png'
								alt='you tube icon'
								className='footer__linkicon'
							/>
						</a>
					</div>
				</div>
				<hr />
				<div className='footer__current'>
					<span className='footer__currentspan'>
						© 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.
					</span>
					<ul className="footer__currentlist">
						<li className="footer__currentitem">
							<a href="#" className="footer__currentitemlink">
								Contact
							</a>
						</li>
						<li className="footer__currentitem">
							<a href="#" className="footer__currentitemlink">
								Blog
							</a>
						</li>
						<li className="footer__currentitem">
							<a href="#" className="footer__currentitemlink">
								Complaint
							</a>
						</li>
						<li className="footer__currentitem">
							<a href="#" className="footer__currentitemlink">
								Advertise
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
