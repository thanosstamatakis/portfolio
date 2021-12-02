import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NzMessageService } from 'ng-zorro-antd/message';

class GradientAnimation {
    cnv: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    circlesNum: number;
    minRadius: number;
    maxRadius: number;
    speed: number;
    w: number;
    h: number;
    circles: any[];
    constructor() {
        this.cnv = document.getElementById('footer') as HTMLCanvasElement;
        this.ctx = this.cnv.getContext(`2d`);
        this.circlesNum = 15;
        this.minRadius = 500;
        this.maxRadius = 1000;
        this.speed = 0.005;

        (window.onresize = () => {
            this.setCanvasSize();
            this.createCircles();
            this.drawAnimation();
        })();
    }
    setCanvasSize() {
        this.w = this.cnv.width = innerWidth * devicePixelRatio;
        this.h = this.cnv.height = innerHeight * devicePixelRatio;
        this.ctx.scale(devicePixelRatio, devicePixelRatio);
    }
    createCircles() {
        this.circles = [];
        for (let i = 0; i < this.circlesNum; ++i) {
            this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
        }
    }
    drawCircles() {
        this.circles.forEach((circle) => circle.draw(this.ctx, this.speed));
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }
    drawAnimation() {
        this.clearCanvas();
        this.drawCircles();
        // This can animate the footer but has performance issues
        // window.requestAnimationFrame(() => this.drawAnimation());
    }
}

class Circle {
    x: number;
    y: number;
    angle: number;
    radius: any;
    firstColor: string;
    secondColor: string;
    color: string;
    colorList = ['#c173ff', '#c173ff', '#c173ff', '#f9d3cb', '#b2eeff', '#b2eeff', '#96b9ff'];
    constructor(w, h, minR, maxR) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (maxR - minR) + minR;
        this.firstColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
        this.secondColor = `hsla(${Math.random() * 360}, 100%, 50%, 0)`;
        this.color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
    }
    draw(ctx: CanvasRenderingContext2D, speed) {
        this.angle += speed;
        const x = this.x + Math.cos(this.angle) * 200;
        const y = this.y + Math.sin(this.angle) * 200;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
        gradient.addColorStop(0, this.firstColor);
        gradient.addColorStop(1, this.secondColor);
        ctx.fillStyle = this.color;
        ctx.filter = 'blur(200px)';
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, AfterViewInit {
    public contactForm: FormGroup;

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            name: this.formBuilder.control('', [Validators.required]),
            message: this.formBuilder.control('', [Validators.required, Validators.maxLength(200)]),
        });
    }

    public ngAfterViewInit(): void {
        new GradientAnimation();
    }

    constructor(private formBuilder: FormBuilder, private message: NzMessageService) {}

    public get isSafari(): boolean {
        return (
            navigator.vendor &&
            navigator.vendor.indexOf('Apple') > -1 &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('CriOS') == -1 &&
            navigator.userAgent.indexOf('FxiOS') == -1
        );
    }

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
