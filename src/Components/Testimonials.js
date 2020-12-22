import React from 'react';
import {TestimonialsPanel, TestimonialsHeader, TestimonialsHeaderSpan, TestimonialsHeaderSpanImage, TestimonialsContent} from '../Elements/TestimonialsPanel';
import {TextButton} from '../Elements/Submit';

function Testimonials() {
    return(
        <TestimonialsPanel>
            <TestimonialsHeader>                
                <TestimonialsHeaderSpan>
                    <TestimonialsHeaderSpanImage src="/static/images/icon_testimonials.png" alt="Testimonials" /> Testimonials
                </TestimonialsHeaderSpan>
            </TestimonialsHeader>
            <TestimonialsContent>
                <TextButton readOnly value="WRITE A TESTIMONIAL" />
            </TestimonialsContent>
        </TestimonialsPanel>
    );
}
export default Testimonials;