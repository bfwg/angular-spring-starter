package com.bfwg.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.joda.time.DateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

/**
 * Created by fan.jin on 2017-05-11.
 */
@MappedSuperclass
public abstract class DeletableModel extends DatedModel {

    @Column( name = "deleted_at" )
    private DateTime deletedAt;

    public DeletableModel() {
    }

    @JsonIgnore
    public DateTime getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt( DateTime deletedAt ) {
        this.deletedAt = deletedAt;
    }

    @JsonIgnore
    public boolean isDeleted() {
        return getDeletedAt() != null;
    }

}
