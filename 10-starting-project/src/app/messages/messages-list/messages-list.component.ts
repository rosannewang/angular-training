import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef, OnInit, DestroyRef } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit{
 private messagesService = inject(MessagesService);
 private cdRef = inject(ChangeDetectorRef);
 private destroyRef = inject(DestroyRef);

  messages: string[] = [];

  ngOnInit() { // set up a subscription to the messages$ observable
    const subscription = this.messagesService.messages$.subscribe(messages => {
      this.messages = messages;
      this.cdRef.markForCheck();
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
  
}

