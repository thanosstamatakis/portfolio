import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
    public contactForm: FormGroup;

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            name: this.formBuilder.control('', [Validators.required]),
            message: this.formBuilder.control('', [Validators.required, Validators.maxLength(200)]),
        });
    }

    constructor(private formBuilder: FormBuilder, private message: NzMessageService) {}

    public submitForm() {
        console.log(this.contactForm.value);
        if (this.contactForm.valid) {
            let msg = this.message.loading('Submitting your information', { nzDuration: 10000 });
            emailjs.send('service_8yhpugk', 'template_6ze3d6o', this.contactForm.value, 'user_57kx89W3WeYCBOjQ2PGR3').then(
                (result: EmailJSResponseStatus) => {
                    this.message.remove(msg.messageId);
                    this.message.success('Information submitted successfully');
                    console.log(result.text);
                },
                (error) => {
                    this.message.error('Error while submitting your message');
                    console.log(error.text);
                }
            );
        }
    }
}
