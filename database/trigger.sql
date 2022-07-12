create OR REPLACE function insertNewMove() RETURNS trigger as $$
    BEGIN
        if NEW.user_item_number is not null then return NEW;
        end if;
        loop
            <<roolbac_to>>
            declare
                max INTEGER:=null;
            begin
            SELECT count(user_item_number) into max from item where username=NEW.username;
            if max is null then
                max:=1;
            ELSE
                max=max+1;
            end if;
            INSERT INTO item( username, user_item_number, item_value) VALUES (NEW.username,max, NEW.item_value);
            exit;
            exception WHEN unique_violation THEN
            --do nothing
            end;
        end loop;
    return null;
    end;

$$ LANGUAGE 'plpgsql';

CREATE TRIGGER trig1
 before insert 
    ON item
   FOR EACH ROW
EXECUTE PROCEDURE myinsert();