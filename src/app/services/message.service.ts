import { Injectable } from '@angular/core';
import SweetAlert from 'sweetalert2';

interface MessageOptions {
    title?: string;
    text?: string;
    icon?: string;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
}
@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor() { }

    show(
        title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'success', options: MessageOptions = {}
    ) {
        return SweetAlert.fire({
            icon,
            title,
            text,
            ...options,
        } as any);
    }
}
