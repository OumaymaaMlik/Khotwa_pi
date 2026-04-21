import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollaborationMember } from '../../../core/models/collaboration-member.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-members-block',
  templateUrl: './members-block.component.html',
  styleUrls: ['./members-block.component.css']
})
export class MembersBlockComponent {
  @Input() members: CollaborationMember[] = [];
  @Input() collaborationId!: number;
  @Input() role!: Role;
  @Input() currentUserId!: number;
  @Input() ownerUserId!: number;
  @Input() canRemoveMembers?: boolean;
  @Input() canLeave?: boolean;

  @Output() memberRemoved = new EventEmitter<{ memberId: number; collaborationId: number }>();
  @Output() collaborationLeft = new EventEmitter<{ collaborationId: number; userId: number }>();

  trackByMember(_: number, member: CollaborationMember): number {
    return member.id;
  }

  canRemoveMember(member: CollaborationMember): boolean {
    if (!this.canRemoveMembers) {
      return false;
    }
    return member?.userId !== this.currentUserId && member?.userId !== this.ownerUserId;
  }

  onRemoveMember(memberId: number): void {
    this.memberRemoved.emit({ memberId, collaborationId: this.collaborationId });
  }

  onLeaveCollaboration(): void {
    this.collaborationLeft.emit({ collaborationId: this.collaborationId, userId: this.currentUserId });
  }
}
