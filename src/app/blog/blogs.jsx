import Image from 'next/image';
import blog1 from '../../../public/blogImg/Blog_Financial_Products_f0395526f5.jpg'
import blog2 from '../../../public/blogImg/Blog_Types_of_Loan_12bc3a0b83.jpg'
import blog3 from '../../../public/blogImg/Credit_Card_Blog_84eb01d4f1.jpg'
import blog4 from '../../../public/blogImg/Blog_Personal_Loans_1_37f95ad4a4.jpg'
import blog5 from '../../../public/blogImg/Credit_Score_b09948343c.jpg'
import blog6 from '../../../public/blogImg/Credit_History_4acdab9346.jpg'
import blog7 from '../../../public/blogImg/Afraid_of_Credit_Card_36fa6a237d.png'
import blog8 from '../../../public/blogImg/Do_s_and_Dont_s_c409c9a6b7.jpg'
import blog9 from '../../../public/blogImg/Purple_Illustration_Business_Marketing_Blog_Banner_3_095d05830f.png'
import blog10 from '../../../public/blogImg/Purple_Illustration_Business_Marketing_Blog_Banner_7_a92fa5a83c.png'

const BlogsPage = () => {
    return (
        <div className='my-12'>
            <h1 className='text-5xl font-bold'>ZET Blogs</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/10-must-have-financial-products-for-millennials-in-india" target='_blank'>
                        <Image className='w-96 rounded' src={blog1} alt="financial products"></Image>
                        <div className='flex'>
                        <p>May 23, 2023 </p>
                        <p> · 4 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>10 Must Have Financial Products for Millennials in India</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/9-different-types-of-loans-in-india" target='_blank'>
                        <Image className='w-96 rounded' src={blog2} alt="Loans"></Image>
                        <div className='flex'>
                        <p>May 24, 2023 </p>
                        <p> · 5 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>9 Different Types of Loans in India</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/understanding-credit-card-rewards-in-india-your-key-to-increasing-your-savings" target='_blank'>
                        <Image className='w-96 rounded' src={blog3} alt="savings"></Image>
                        <div className='flex'>
                        <p>May 24, 2023 </p>
                        <p> · 6 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>Understanding Credit Card Rewards in India: Your Key to Increasing Your Savings</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/5-common-mistakes-to-avoid-when-applying-for-a-personal-loan-in-india" target='_blank'>
                        <Image className='w-96 rounded' src={blog4} alt="mistakes"></Image>
                        <div className='flex'>
                        <p>May 24, 2023 </p>
                        <p> · 5 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>5 Common Mistakes to Avoid When Applying for a Personal Loan in India</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/how-credit-card-usage-makes-or-breaks-your-credit-score" target='_blank'>
                        <Image className='w-96 rounded' src={blog5} alt="credit score"></Image>
                        <div className='flex'>
                        <p>May 29, 2023 </p>
                        <p> · 5 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>How Credit Card Usage Makes or Breaks Your Credit Score?</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/building-credit-how-to-create-your-credit-history-from-scratch" target='_blank'>
                        <Image className='w-96 rounded' src={blog6} alt="credit history"></Image>
                        <div className='flex'>
                        <p>June 1, 2023 </p>
                        <p> · 5 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>Building Credit: How to Create Your Credit History From Scratch?</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/are-you-afraid-of-using-credit-cards" target='_blank'>
                        <Image className='w-96 rounded' src={blog7} alt="credit card"></Image>
                        <div className='flex'>
                        <p>June 6, 2023 </p>
                        <p> · 5 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>Are You Afraid of Using Credit Cards?</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/dos-and-donts-for-applying-for-a-loan-in-india" target='_blank'>
                        <Image className='w-96 rounded' src={blog8} alt="loan"></Image>
                        <div className='flex'>
                        <p>June 8, 2023 </p>
                        <p> · 5 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>Do’s and Don’ts for Applying for a Loan in India</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/why-personal-loans-are-the-best-options-during-a-financial-crisis" target='_blank'>
                        <Image className='w-96 rounded' src={blog9} alt="finance"></Image>
                        <div className='flex'>
                        <p>June 15, 2023 </p>
                        <p> · 6 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>Why Personal Loans Are the Best Options During a Financial Crisis?</h4>

                    </a>
                </div>
                <div className='mt-6'>
                    <a href="https://zetapp.in/blog/5-mistakes-to-be-avoided-while-applying-for-loans-in-india" target='_blank'>
                        <Image className='w-96 rounded' src={blog10} alt="finance"></Image>
                        <div className='flex'>
                        <p>June 15, 2023 </p>
                        <p> · 6 mins read</p>
                        
                        </div>
                        <h4 className='text-2xl font-bold'>5 Mistakes to Be Avoided While Applying for Loans in India</h4>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;