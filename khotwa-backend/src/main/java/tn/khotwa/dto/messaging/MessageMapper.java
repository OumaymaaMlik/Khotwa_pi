package tn.khotwa.dto.messaging;

import tn.khotwa.entity.Message;
import tn.khotwa.entity.Notification;

public class MessageMapper {

    public static MessageDTO toMessageDTO(Message message, String senderName, String receiverName) {
        MessageDTO dto = new MessageDTO();
        dto.setSenderName(senderName);
        dto.setReceiverName(receiverName);
        dto.setId(message.getId());
        dto.setSubject(message.getSubject());
        dto.setBody(message.getBody());
        dto.setSenderId(message.getSenderId());
        dto.setReceiverId(message.getReceiverId());
        dto.setType(message.getType());
        dto.setStatus(message.getStatus());
        dto.setCreatedAt(message.getCreatedAt());
        dto.setUpdatedAt(message.getUpdatedAt());
        dto.setFileUrl(message.getFileUrl());
        dto.setDeletedForAll(message.isDeletedForAll());
        dto.setDeletedForUsers(message.getDeletedForUsers());
        dto.setParentMessageId(message.getParentMessage() != null ? message.getParentMessage().getId() : null);
        dto.setParentMessageContent(message.getParentMessage() != null ? message.getParentMessage().getBody() : null);
        return dto;
    }

    public static NotificationDTO toNotificationDTO(Notification notification) {
        NotificationDTO dto = new NotificationDTO();
        dto.setId(notification.getId());
        dto.setRecipientId(notification.getRecipientId());
        dto.setSenderId(notification.getSenderId());
        dto.setMessage(notification.getMessage());
        dto.setRead(notification.isRead());
        dto.setType(notification.getType());
        dto.setCreatedAt(notification.getCreatedAt());
        return dto;
    }
}
